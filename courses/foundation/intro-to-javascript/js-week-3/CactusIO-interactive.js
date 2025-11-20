const activities = [];
const limitTime = 60;
const today = new Date().toLocaleDateString("en-US");

function addActivity(today, activity, duration) {
  activities.push({ today, activity, duration });
}

addActivity("11/19/2025", "Youtube", 30);
addActivity("11/19/2025", "Instagram", 60);
addActivity("11/18/2025", "Instagram", 60);
console.log(activities);

function showStatus(activities, limitTime) {
  let usageTime = 0;
  let activitiesNumber = 0;
  for (i = 0; i < activities.length; i++) {
    if (activities[i].date === today.toLocaleDateString("en-US")) {
      usageTime += activities[i].duration;
      activitiesNumber += 1;
    }
  }

  console.log(
    "You have added " +
      activitiesNumber +
      " activities. They amount to " +
      usageTime +
      " min of usage"
  );

  if (usageTime > limitTime) {
    console.log("You have reached your limit, no more smartphoning for you!");
  }
}

showStatus(activities, limitTime);

function mostUsedActivity() {
  let longestDuration = 0;
  let mostUsedActivity;
  for (i = 0; i < activities.length; i++) {
    if (longestDuration < activities[i].duration) {
      longestDuration = activities[i].duration;
      mostUsedActivity = activities[i].activity;
    }
  }
  console.log("You spend so much time on " + mostUsedActivity);
}

mostUsedActivity();
