using Microsoft.AspNetCore.SignalR.Client;

namespace HubHelper
{
    public static class Notifier
    {
        public static async void NotifyDone(TaskItem task)
        {
            HubConnection connection;
            connection =
                new HubConnectionBuilder()
                    .WithUrl("http://localhost:5000/notify")
                    .Build();
            await connection.StartAsync();
            task.Done = true;
            await connection.InvokeAsync("TaskDone", task);
        }
    }
}
