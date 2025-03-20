/*
  # Remove unused blog_posts table

  1. Changes
    - Drop the blog_posts table if it exists
    - This table is not being used in the application
*/

DROP TABLE IF EXISTS blog_posts;