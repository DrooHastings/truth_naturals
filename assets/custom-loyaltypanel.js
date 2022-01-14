// Loyalty
function loadLoyalty() {
  var data = window.loyaltylion;
  var time = 3000;
  var customer;
  var program;
  var analytics;

  var panelActivityBody = '[js-loyalty-panel="activityBody"]',
    panelActivityTable = '[js-loyalty-panel="activityTable"]',
    panelBalance = '[js-loyalty-panel="balance"]',
    panelContainer = '[js-loyalty-panel="container"]',
    panelProgress = '[js-loyalty-panel="progress"]',
    panelRemaining = '[js-loyalty-panel="remaining"]',
    panelTierDescription = '[js-loyalty-panel="tierDescription"]',
    panelTierImage = '[js-loyalty-panel="tierImage"]',
    panelTierName = '[js-loyalty-panel="tierName"]',
    toggle = '[js-loyalty-lion="toggle"]',
    popUp = '[js-loyalty-lion="popUp"]',
    close = '[js-loyalty-lion="close"]',
    loader = '[js-loyalty-lion="loader"]',
    elments = document.querySelector(panelContainer),

    panelData = {
      activityBody: elments.querySelector(panelActivityBody),
      activityTable: elments.querySelector(panelActivityTable),
      balance: elments.querySelector(panelBalance),
      progress: elments.querySelector(panelProgress),
      remaining: elments.querySelector(panelRemaining),
      tierDescription: elments.querySelector(panelTierDescription),
      tierImage: elments.querySelector(panelTierImage),
      tierName: elments.querySelector(panelTierName)
    };

  function getData(args, period) {

    const interval = setInterval(() => {
      if (!args) {
        getData(data, time);
      } else if (args) {
        customer = window.loyaltylion.customer;
        program = window.loyaltylion.program;

        outputActivityPoints(customer);
        tierData(customer, program);
        initPopup();

        clearInterval(interval);
      }
    }, period);
  }

  function initPopup() {
    document.querySelector(toggle).addEventListener('click', event => {
      document.getElementsByClassName("main-content")[0].setAttribute("style", "z-index: 999999; position: relative;")
      document.querySelector(popUp).classList.add('is-active');
    });

    document.querySelector(close).addEventListener('click', event => {
      document.getElementsByClassName("main-content")[0].removeAttribute("style");
      document.querySelector(popUp).classList.remove('is-active');
    });
  }

  function outputActivityPoints(data) {

    if (data) {
      panelData.activityBody.innerHTML = data.actions.map((function(activity) {
        return function(item) {
          return '\n<tr>\n<td>\n<p class="body-2">\n'.concat(function(element) {
            var activityDate = new Date(element.date);
            return "".concat(activityDate.getDate(), "/").concat(activityDate.getMonth() + 1, "/").concat(activityDate.getFullYear())
          }(item), "<br>\n").concat(item.note ? item.note.en : "", '\n</p>\n</td>\n\n<td>\n<p class="subtitle-2">').concat(function(elPoints) {
            return "reward" === elPoints.type ? "-".concat(elPoints.points, " points") : "&nbsp;&nbsp;".concat(elPoints.points, " points")
          }(item), "</p>\n</td>\n</tr>\n")
        }(activity)
      })).join("")
    } else {
      panelData.activityBody.innerHTML = '<td colspan="2" style="text-align: center; font-size: 18px; color: #262626; font-weight: 400;">No activity</td>';
    }

  }


//   function tierData(user, data) {
//     if (user) {
//       if (user.loyaltyTierMembership) {
//         var tierData = function(e) {
//           return data.loyaltyTiers.find((function(item) {
//             return item.id === e;
//           }))
//         }(user.loyaltyTierMembership.loyaltyTierId);

//         var userCurrentLevel = tierData.position + 1,
//             neededPoints = tierData.bounds.upper - user.pointsApproved,
//             userCurrentProgress = user.pointsApproved / tierData.bounds.upper * 100,
//             descr = data.loyaltyTiers.find((function(e) {
//             return e.level === userCurrentLevel;
//           }));
//         panelData.balance.innerHTML = user.pointsApproved;
//         // panelData.tierName.innerHTML = "Level ".concat(userCurrentLevel, ": ").concat(tierData.name);
//         panelData.remaining.innerHTML = "You only need <span>".concat(neededPoints, "</span> points to earn your next discount! ");
//         panelData.progress.style.width = "".concat(userCurrentProgress, "%");
//         descr && (panelData.tierDescription.innerHTML = descr.description,
//           panelData.tierImage.innerHTML = '<img src="'.concat(descr.image, '">'));
//       }
//     }
//   }

  function tierData(user, data) {
      if (user) {
        
        if (data.rewards) {
          var rewardsList = [],
              userPoints =  user.pointsApproved,
              neededPoints,
              userCurrentProgress,
              currentStep;
          function stillNeed(points) {
          	return "You only need <span>".concat(points, "</span> points to earn your next discount! ");
          };
          
          function doNotNeed(points) {
          	return "You have enough points to claim the top reward!";
          };
          
          // get list of rewards           
          for (var i = 0; i < data.rewards.length; i++) {
          	rewardsList.push(data.rewards[i].cost);
          }
          
          currentStep = rewardsList.filter(function(item){
                        	return userPoints < item;
                        })[0] || rewardsList.slice(-1)[0];

          neededPoints = currentStep - userPoints;
          userCurrentProgress = userPoints / currentStep * 100;

          panelData.balance.innerHTML = user.pointsApproved;
//           // panelData.tierName.innerHTML = "Level ".concat(userCurrentLevel, ": ").concat(tierData.name);
          if (userPoints >= rewardsList.slice(-1)[0]) {
            panelData.remaining.innerHTML = doNotNeed(neededPoints);
          } else {
          	panelData.remaining.innerHTML = stillNeed(neededPoints);
          }
          panelData.progress.style.width = "".concat(userCurrentProgress, "%");
        }
      }
    }

  getData(data, time);
}

setTimeout(function() {
  if (document.querySelector('[js-loyalty-panel="container"]')) {
    loadLoyalty();
  }
}, 1500);