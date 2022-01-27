FROM node:16

# creating the app folder
WORKDIR /usr/src/app

# installing the app dependencies (both package.json and package-lock.json)
COPY package*.json ./

RUN npm install
# if building the code for production, then
# RUN npm ci --only=production
RUN npm install parcel@2.2.1 -g
# copy all files
COPY . .

# parcel listnes on port 8000 by default
# EXPOSE 8000

CMD ["npm", "start"]