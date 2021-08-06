using System;
using System.Collections.Concurrent;
using System.Linq;
using System.Text.Json;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;

public class NotifyHub : Hub
{
    //!!!warning extens
    private static ConcurrentBag<TaskItem>
        _task = new ConcurrentBag<TaskItem>();

    //Going to be called from the client side (js vue)
    public async Task AddTask(object taskItem)
    {
        TaskItem item =
            JsonConvert
                .DeserializeObject<TaskItem>(((JsonElement) taskItem)
                    .ToString());
        _task.Add (item);


#pragma warning disable CS4014
        Task.Factory.StartNew (DoTasks);

        //result callback to client.
        await Clients.All.SendAsync("AddedTask", taskItem);
    }

    public async Task TaskDone(object taskItem)
    {
        await Clients.All.SendAsync("TaskIsDone", taskItem);
    }

    private void DoTasks()
    {
        _task
            .ToList()
            .ForEach(x =>
            {
                Thread.Sleep(1000 * RandomNumber(1, 10));
                HubHelper.Notifier.NotifyDone (x);
            });
    }

    public int RandomNumber(int min, int max)
    {
        Random random = new Random();
        return random.Next(min, max);
    }
}
