#ARG enviroment

# Stage1: UI Build
FROM node:14-slim AS ui-build
WORKDIR /usr/src
COPY ui/ ./ui/
RUN cd ui && npm install && npm run build

# Stage2: API Build
FROM node:14-slim AS api-build
WORKDIR /usr/src
COPY api/ ./api/
#ENV ENVIRONMENT test
#ENV URI test
# docker build -t mern-app --build-arg enviroment=development .
#RUN cd api && npm install && ENVIRONMENT=$enviroment npm run build
RUN cd api && npm install && npm run build
RUN ls

# Stage3: Packagign the app
FROM node:14-slim
WORKDIR /root/
COPY --from=ui-build /usr/src/ui/build ./ui/build
COPY --from=api-build /usr/src/api/dist .
RUN ls

EXPOSE 80

CMD ["node", "api.bundle.js"]