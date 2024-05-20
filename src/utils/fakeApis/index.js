import { createServer, Model } from 'miragejs';
import { companyList, topCompanyList } from './companyList';
import { jobList } from './jobList';
import { userList } from './userList';

export const setupServer = () => {
  let server = createServer({
    models: {
      userList: Model,
    },
    routes() {
      this.namespace = 'api';

      this.get('/it-jobs', (schema) => {
        return schema.db.jobList;
      });

      this.get('/it-companies', (schema) => {
        return schema.db.companyList;
      });

      this.get('/top-companies', (schema) => {
        return schema.db.topCompanyList;
      });

      this.get('/users', (schema) => {
        return schema.db.userList;
      });

      this.post('/users', (schema, request) => {
        let newUser = JSON.parse(request.requestBody);
        return schema.db.userList.insert(newUser);
      });

      this.post('/update-users', (schema, request) => {
        const { id, key, payload } = JSON.parse(request.requestBody);
        return schema.db.userList.update(id, { [key]: payload });
      });
    },

    seeds(server) {
      server.db.loadData({
        jobList: jobList,
        companyList: companyList,
        topCompanyList: topCompanyList,
        userList: userList,
      });
    },
  });
};
