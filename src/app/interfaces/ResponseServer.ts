interface ResponseServer{
    tokenObj: {
        type: string;
        token: string;
        refreshToken: any;
    };
    id: number;
}