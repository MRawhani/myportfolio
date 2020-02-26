const UserModel = require("./../models/UserModel");
const PortfolioModel = require("./../models/PortfolioModel");
const BlogModel = require("./../models/BlogModel");
const ToolModel = require("./../models/ToolsModel");
const bcrypt = require("bcrypt");
const AdminBroExpressjs = require("admin-bro-expressjs");
const AdminBro = require("admin-bro");
AdminBro.registerAdapter(require("admin-bro-mongoose"));

const canEditCars = ({ currentAdmin, record }) => {
  return (
    currentAdmin &&
    (currentAdmin.role === "admin" ||
      currentAdmin._id === record.param("ownerId"))
  );
};
const canModifyUsers = ({ currentAdmin }) =>
  currentAdmin && currentAdmin.role === "admin";
const addSlug = title=>{
  const words = title.trim().split(" ");
  let slug = '';
  words.forEach(element => {
    slug += element+'-';
  });

  return slug;
}
// Pass all configuration settings to AdminBro
const adminBro = new AdminBro({
  resources: [
    {
      resource: UserModel,
      options: {
        properties: {
          encryptedPassword: { isVisible: false },
          password: {
            type: "string",
            isVisible: {
              list: false,
              edit: true,
              filter: false,
              show: false
            }
          }
        },
        actions: {
          new: {
            // this is a bfunction run before saving >> go back to docs
            before: async request => {
              if (request.payload.record.password) {
                request.payload.record = {
                  ...request.payload.record,
                  encryptedPassword: await bcrypt.hash(
                    request.payload.record.password,
                    10
                  ),
                  password: undefined
                };
              }
              return request;
            }
          },
          edit: { isAccessible: canModifyUsers },
          delete: { isAccessible: canModifyUsers },
          new: { isAccessible: canModifyUsers }
        }
      }
    },

    {
      resource: PortfolioModel,
      options: {
        properties: {
       
          description: {
          
            isVisible: {
              list: false,
              edit: true,
              filter: true,
              show: true
            }
          },
          image: {
          
            isVisible: {
              list: false,
              edit: true,
              filter: true,
              show: true
            }
          }
        },
        actions: {
          edit: { isAccessible: canModifyUsers },
          delete: { isAccessible: canModifyUsers },
          new: { isAccessible: canModifyUsers }
        }
      }
    },   {
      resource: BlogModel,
      options: {
        properties: {
          content: {type: 'richtext'},
          
          image: {
          
            isVisible: {
              list: false,
              edit: true,
              filter: true,
              show: true
            }
          }, slug: {
          
            isVisible: {
              list: false,
              edit: false,
              filter: false,
              show: false
            }
          }
        },
        actions: {
          new: {
            // this is a bfunction run before saving >> go back to docs
            before: async (request, { currentAdmin }) => {
              request.payload.record = {
                ...request.payload.record,
                ownerId: currentAdmin._id,
              }
              return request
            },
          },
          edit: { isAccessible: canModifyUsers },
          delete: { isAccessible: canModifyUsers },
          new: { isAccessible: canModifyUsers }
        }
      }
    },
    {
      resource: ToolModel,
      options: {
        properties: {
       
          
          image: {
          
            isVisible: {
              list: false,
              edit: true,
              filter: true,
              show: true
            }
          }
        },
        actions: {
          
          edit: { isAccessible: canModifyUsers },
          delete: { isAccessible: canModifyUsers },
          new: { isAccessible: canModifyUsers }
        }
      }
    }
  ],
  rootPath: "/admin",
  branding: {
    companyName: "MRawhani"
  }
});
const router = AdminBroExpressjs.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await UserModel.findOne({ email });
    if (user) {
      const matched = await bcrypt.compare(password, user.encryptedPassword);
      if (matched) {
        return user;
      }
    }
    return false;
  },
  cookiePassword: "some-secret-password-used-to-secure-cookie"
});
module.exports = { AdminBro: adminBro, router: router };
