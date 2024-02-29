import {User} from "./user";
import {WrongCredentialsError} from "./error";
import {PrismaConnect} from "./PrismaConnect";

export class UsersService {
    constructor(private readonly connector: PrismaConnect) {
    }

    public async create(props: { password: string; email: string }): Promise<{ id: string }> {
        const user = await User.create(props);
        await this.connector.insertOne(user);
        return {id: user.id};
    }

    public async findOneByEmail(email: string): Promise<User | null> {
        return this.connector.findOneByEmail(email);
    }

    public async comparePassword(password: string, hash: string): Promise<void> {
        const isPasswordCorrect = await User.comparePassword(password, hash);
        if (!isPasswordCorrect) {
            throw new WrongCredentialsError();
        }
    }
}

