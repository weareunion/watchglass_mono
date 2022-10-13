export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            CLIENT_WEBSERVER_PORT: string;
            CLIENT_AUTH0_clientID: string;
            CLIENT_AUTH0_issuerBaseURL: string;
            CLIENT_AUTH0_baseURL: string;
            CLIENT_AUTH0_secret: string;
            ENV: 'test' | 'dev' | 'prod';
        }
    }
}
