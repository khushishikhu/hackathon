import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Button from '@mui/material/Button';



export default function PostCard({ post }) {

  const [publishing, setPublishing] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // Publish post
  const publishPost = async (postId) => {
    // change publishing state
    setPublishing(true);

    try {
      // Update post
      await fetch('/api/posts/posts', {
        method: 'PUT',
        body: postId,
      });

      // reset the publishing state
      setPublishing(false);

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // Stop publishing state
      return setPublishing(false);
    }
  };
  // Delete post
  const deletePost = async (postId) => {
    //change deleting state
    setDeleting(true);

    try {
      // Delete post
      await fetch('/api/posts/posts', {
        method: 'DELETE',
        body: postId,
      });

      // reset the deleting state
      setDeleting(false);

      // reload the page
      return router.push(router.asPath);
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
    }
  };

  return (
    <>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="data:image/jpeg;base64,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"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <small>{new Date(post.createdAt).toLocaleDateString()}</small>
            </Typography>

          </CardContent>

          <CardContent>

            {!post.published ? (
              <Button variant="contained" color="success" type="button" onClick={() => publishPost(post._id)}>
                {publishing ? 'Publishing' : 'Publish'}
              </Button>
            ) : null}
            <Button variant="outlined" color="error" type="button" onClick={() => deletePost(post['_id'])}>
              {deleting ? 'Adopting' : 'Adopt'}
            </Button>

          </CardContent>

        </CardActionArea>
      </Card>
    </>
  );
}
