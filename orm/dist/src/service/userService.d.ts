declare class UserService {
    private userRepository;
    constructor();
    register: (user: any) => Promise<any>;
    checkUser: (user: any) => Promise<"User is not exist" | "Password is wrong" | {
        token: any;
        idUser: any;
        username: any;
        role: any;
    }>;
}
declare const _default: UserService;
export default _default;
