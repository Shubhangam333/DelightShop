/**
 * ! User controllers
 */

// * Register Controller

// !POST request

export const register = async (req, res, next) => {};

// * Login Controller

// !POST request

export const login = async (req, res, next) => {};

// * Profile Controller

/**
 * ! Get request
 * @param {userId} req
 */

export const getUserProfileDetails = async (req, res, next) => {};

/**
 * ! Admin Controllers
 */

// * Get information of an user

// !GET request

export const getSingleUserDetails = async (req, res, next) => {};

// * Fetch List of Users

// !GET request

export const getAllUsers = async (req, res, next) => {};

// * Block a User

// !PUT request

export const blockUser = async (req, res, next) => {};

// * UnBlock a User

// !PUT request

export const unblockUser = async (req, res, next) => {};

// * Delete a User

// !DELETE request

export const deleteUser = async (req, res, next) => {};
