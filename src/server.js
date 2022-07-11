const Hapi = require("@hapi/hapi");

const init = async () => {
    const server = Hapi.server({
        port: 8000,
        host: "localhost",

        // handle cors
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init();