import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { Server } from 'http';
import { Socket } from 'dgram';

@WebSocketGateway(
  {
    cors : {
     origin : "*"
    },
    path : "/socket"
   }
)


export class ChatGateway {
   constructor(private readonly chatService: ChatService) {}
   @WebSocketServer()
   Server : Server

  // lanjutkkan kodenya di dalam kurung ini
  async handleConnection(socket : Socket) {
      console.log("connected")
     }
     @SubscribeMessage("chat-send")
      async sendMessage(socket : Socket, data : any) {
      const {message} = data
      this.Server.emit("chat-receive", message)
 }

      async handleDisconnect(socket : Socket) {
      console.log("disconnected")
     }
    
  
  
  }