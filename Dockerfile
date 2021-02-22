FROM node:12-alpine
ENV PERCY_TOKEN=5a5015821b61acf67bdeda9ebd87e3bac6c6d444b143192ecd29f41b4f378561
COPY . .
RUN npm install
RUN chmod +X scriptPercy.sh
CMD ./scriptPercy.sh