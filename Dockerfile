# building the frontend
FROM node:14-slim AS ui-build
WORKDIR /usr/src
COPY ui/ ./ui/
RUN cd ui && npm install && npm run build
    
# building the backend
FROM node:14-slim AS api-build
WORKDIR /usr/src
COPY api/ ./api/
ARG enviroment
ENV ENVIRONMENT=${enviroment}
RUN cd api && npm install && npm run build
RUN ls
    
# finishing the whole package
FROM node:14-slim
WORKDIR /root/
COPY --from=ui-build /usr/src/ui/build ./ui/build
COPY --from=api-build /usr/src/api/dist .
RUN ls
    
EXPOSE 80
    
CMD ["node", "api.bundle.js"]