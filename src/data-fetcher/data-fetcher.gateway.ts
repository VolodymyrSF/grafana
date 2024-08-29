import { WebSocketGateway, WebSocketServer, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { DataFetcherService } from './data-fetcher.service';

@WebSocketGateway({
  cors: {
    origin: '*',  // Дозволяємо підключення з будь-якого походження
  },
})
export class DataFetcherGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  constructor(private readonly dataFetcherService: DataFetcherService) {}

  afterInit(server: Server) {
    console.log('WebSocket server initialized');
  }

  handleConnection(client: any) {
    console.log('Client connected:', client.id);

    // Відправляємо дані кожні 10 секунд
    setInterval(async () => {
      const data = await this.dataFetcherService.fetchData();
      client.emit('dataUpdate', data);  // Надсилаємо подію з даними
    }, 10000);
  }

  handleDisconnect(client: any) {
    console.log('Client disconnected:', client.id);
  }
}
