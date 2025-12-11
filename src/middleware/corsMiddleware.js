import cors from 'cors';

const corsOptions = {
    origin: (origin, callback) => {
        // Allow these origins
        const allowedOrigins = [
            'http://localhost:5173',
            'http://localhost:3000',
            'https://rococo-caramel-c3112a.netlify.app',
            'https://693a361e3c07a80bb40f40b7--rococo-caramel-c3112a.netlify.app',
        ];

        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
