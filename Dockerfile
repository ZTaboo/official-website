FROM node:18.18
RUN mkdir /root/project
WORKDIR /root/project
RUN mkdir .next
COPY .next* ./.next/
COPY package.json /root/project/
# 设置镜像
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g npm
RUN npm install
CMD ["npm", "run", "start"]