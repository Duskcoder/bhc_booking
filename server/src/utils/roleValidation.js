const Role = require("../model/roleModel");

module.exports = async (role) => {
  try {
    const restrict = await Role.findOne({ role: role });

    return restrict;
  } catch (error) {}
};
