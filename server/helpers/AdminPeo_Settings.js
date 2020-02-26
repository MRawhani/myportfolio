const UserModel = require("./../models/UserModel");
const PortfolioModel = require("./../models/PortfolioModel");
const bcrypt = require('bcrypt')

const AdminBro = require("admin-bro");
AdminBro.registerAdapter(require("admin-bro-mongoose"));

const canEditCars = ({ currentAdmin, record }) => {
    return currentAdmin && (
      currentAdmin.role === 'admin'
      || currentAdmin._id === record.param('ownerId')
    )
  }
  const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'
  
const contentParent = {
  name: "Content",
  icon: "fa fa-file-text"
};
// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [
    {
        resource: UserModel,
        options: {
          properties: {
            encryptedPassword: { isVisible: false },
            password: {
              type: 'string',
              isVisible: {
                list: false, edit: true, filter: false, show: false,
              },
            },
          },
          actions: {
            new: {
              before: async (request) => {
                if(request.payload.record.password) {
                  request.payload.record = {
                    ...request.payload.record,
                    encryptedPassword: await bcrypt.hash(request.payload.record.password, 10),
                    password: undefined,
                  }
                }
                return request
              },
            },
            edit: { isAccessible: canModifyUsers },
            delete: { isAccessible: canModifyUsers },
            new: { isAccessible: canModifyUsers },
          }
        }
      },

    PortfolioModel
  ],
  rootPath: "/admin",
  branding: {
    companyName: "Amazing c.o."
  }
});

 module.exports = adminBro