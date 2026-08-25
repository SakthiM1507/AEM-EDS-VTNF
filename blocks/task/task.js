export default function decorate(block) {
  const tasks = [...block.children];

  tasks.forEach((task) => {
    task.classList.add('custom-task');

    const taskContent = task.querySelector(':scope > div');
    taskContent?.classList.add('custom-task_content');

    const taskTitle = task.querySelector('p:not(:has(a))');
    taskTitle?.classList.add('custom-task_title');

    const taskpreTitle = task.querySelector('h4');
    taskpreTitle?.classList.add('custom-task_pre-title');

    const taskservice = task.querySelectorAll('table');
    taskservice?.forEach((service) => {
      service.classList.add('custom-task_service');

      const taskserviceCont = service.querySelector('tr');
      taskserviceCont?.classList.add('custom-task_service-content');

      const taskserviceimage = service.querySelector('td:has(img)');
      taskserviceimage?.classList.add('custom-task_service-image');

      const taskserviceicon = service.querySelector('img');
      taskserviceicon?.classList.add('custom-task_service_icon');

      const taskservicedescription = service.querySelector('td:not(:has(img))');
      taskservicedescription?.classList.add('custom-task_service_description');
    });
    const button = task.querySelector('p:has(a)');
    button?.classList.add('custom-task-button');

    const learnMore = block.querySelector('a[title="Learn more"]');
    learnMore?.classList.add('custom-button__link--secondary');

    const getStarted = block.querySelector('a[title="Get start today"]');
    getStarted?.classList.add('custom-button__link--primary');
  });
}
