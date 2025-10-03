import db from './db'; // Correct import of the default export from db.ts
import { User } from './db'; // Import the User type

// Add a new user to the database
export const addUser = async (user: User) => {  // Use User here
  try {
    const id = await db.users.add(user); // Accessing the 'users' table
    console.log('User added with ID:', id);
    return id;
  } catch (error) {
    console.error('Failed to add user:', error);
  }
};

// Retrieve all users
export const getUsers = async () => {
  try {
    const users = await db.users.toArray(); // Accessing the 'users' table
    console.log('Retrieved users:', users);
    return users;
  } catch (error) {
    console.error('Failed to retrieve users:', error);
  }
};

// Update a user
export const updateUser = async (id: number, updates: Partial<User>) => { // Correctly typing the updates as Partial<User>
  try {
    await db.users.update(id, updates);
    console.log(`User with ID ${id} updated.`);
  } catch (error) {
    console.error('Failed to update user:', error);
  }
};

// Delete a user
export const deleteUser = async (id: number) => {
  try {
    await db.users.delete(id); // Accessing the 'users' table
    console.log(`User with ID ${id} deleted.`);
  } catch (error) {
    console.error('Failed to delete user:', error);
  }
};
