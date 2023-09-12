export default defineEventHandler(async (event) => {
    const req = event.node.req;
    const ip = req.connection.remoteAddress || req.socket.remoteAddress;

    const data = { message: ip };

    console.log('event', ip);

    return data;
});
