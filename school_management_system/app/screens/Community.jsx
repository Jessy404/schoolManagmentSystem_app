import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as ImagePicker from 'expo-image-picker';

const CommunityScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: '1',
      username: 'Tim Bakes',
      content: 'Hey lovely people. Please suggest me how to deal with baby depression?',
      image: 'https://via.placeholder.com/150',
      likes: 357,
      userLiked: false,
      showComments: false,
      comments: [
        {
          id: 'c1',
          text: 'Hang in there, Tim!',
          username: 'Sarah Lee',
          userImage: 'https://via.placeholder.com/50',
          createdAt: new Date(),
        },
      ],
      userImage: 'https://via.placeholder.com/50',
      createdAt: new Date(),
    },
  ]);

  const [newPost, setNewPost] = useState('');
  const [newComment, setNewComment] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Permission to access media library is required!');
      }
    };
    requestPermission();
  }, []);

  const handleAddPost = () => {
    if (newPost.trim() !== '') {
      const newPostObj = {
        id: Math.random().toString(),
        username: 'New User',
        content: newPost,
        image: selectedImage,
        likes: 0,
        userLiked: false,
        showComments: false,
        comments: [],
        userImage: 'https://via.placeholder.com/50',
        createdAt: new Date(),
      };
      setPosts([newPostObj, ...posts]);
      setNewPost('');
      setSelectedImage(null);
    }
  };

  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              likes: post.userLiked ? post.likes - 1 : post.likes + 1,
              userLiked: !post.userLiked,
            }
          : post
      )
    );
  };

  const handleAddComment = (postId) => {
    if (newComment.trim() !== '') {
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                comments: [
                  ...post.comments,
                  {
                    id: Math.random().toString(),
                    text: newComment,
                    username: 'New User',
                    userImage: 'https://via.placeholder.com/50',
                    createdAt: new Date(),
                  },
                ],
              }
            : post
        )
      );
      setNewComment('');
    }
  };

  const toggleComments = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id
          ? { ...post, showComments: !post.showComments }
          : post
      )
    );
  };

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.uri);
      }
    } catch (error) {
      console.log('Error picking image:', error);
    }
  };

  const formatDate = (date) => {
    const now = new Date();
    const diffInMs = now - date;
    const diffInMinutes = Math.floor(diffInMs / 60000);
    if (diffInMinutes < 60) return `${diffInMinutes} mins ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hours ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays} days ago`;
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainerWrapper}>
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image source={{ uri: item.userImage }} style={styles.userImage} />
          <View style={styles.userInfo}>
            <Text style={styles.username}>{item.username}</Text>
            <Text style={styles.postTime}>{formatDate(item.createdAt)}</Text>
          </View>
        </View>
        <Text style={styles.content}>{item.content}</Text>
        {item.image && (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}
        <View style={styles.postFooter}>
          <TouchableOpacity onPress={() => handleLike(item.id)} style={styles.iconButton}>
            <Icon name="heart" size={20} color={item.userLiked ? 'red' : '#ccc'} />
            <Text style={styles.likeCount}>{item.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleComments(item.id)} style={styles.iconButton}>
            <Icon name="comment" size={20} color="#0A505B" />
            <Text style={styles.commentCount}>{item.comments.length}</Text>
          </TouchableOpacity>
        </View>

        {item.showComments && (
          <>
            <Text style={styles.commentsHeader}>Comments</Text>
            <View style={styles.commentSection}>
              <FlatList
                data={item.comments}
                renderItem={({ item }) => (
                  <View style={styles.commentCard}>
                    <View style={styles.commentHeader}>
                      <Image source={{ uri: item.userImage }} style={styles.commentUserImage} />
                      <View style={styles.commentUserInfo}>
                        <Text style={styles.commentUsername}>{item.username}</Text>
                        <Text style={styles.commentTime}>{formatDate(item.createdAt)}</Text>
                      </View>
                    </View>
                    <Text style={styles.commentText}>{item.text}</Text>
                  </View>
                )}
                keyExtractor={(comment) => comment.id}
              />
              <View style={styles.newCommentContainer}>
                <TextInput
                  style={styles.newCommentInput}
                  placeholder="Write a comment..."
                  value={newComment}
                  onChangeText={setNewComment}
                />
                <TouchableOpacity
                  style={styles.commentButton}
                  onPress={() => handleAddComment(item.id)}
                >
                  <Text style={styles.commentButtonText}>Post</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Text style={styles.header}>Community</Text>
          <View style={styles.newPostContainer}>
            <TextInput
              style={styles.newPostInput}
              placeholder="Write something..."
              value={newPost}
              onChangeText={setNewPost}
              multiline
            />
            <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
              <Icon name="image" size={30} color="#0A505B" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postButton} onPress={handleAddPost}>
              <Text style={styles.postButtonText}>Post</Text>
            </TouchableOpacity>
          </View>
        </>
      }
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#0A505B',
  },
  newPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  newPostInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
  imagePickerButton: {
    marginLeft: 10,
  },
  postButton: {
    backgroundColor: '#148B9C',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  postContainerWrapper: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  postContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: 'column',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0A505B',
  },
  postTime: {
    fontSize: 12,
    color: '#888',
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    marginLeft: 5,
    color: '#0A505B',
  },
  commentCount: {
    marginLeft: 5,
    color: '#0A505B',
  },
  commentsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A505B',
    marginBottom: 10,
  },
  commentSection: {
    marginTop: 10,
  },
  commentCard: {
    backgroundColor: '#FFFFFF',
    padding: 7,
    marginBottom: 15,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5FCFF',
    flexDirection: 'column',
    textAlign: 'center',
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  commentUserImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',

  },
  commentUserInfo: {
    flexDirection: 'column',
  },
  commentUsername: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#0A505B',
  },
  commentTime: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  commentText: {
  
    color: '#444',
    lineHeight: 15,
    textAlign: 'left', 
   paddingLeft : 50
},

  newCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingTop: 10,
  },
  newCommentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 8,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    fontSize: 14,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  commentButton: {
    backgroundColor: '#0A505B',
    padding: 10,
    borderRadius: 20,
    marginLeft: 10,
  },
  commentButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default CommunityScreen;
