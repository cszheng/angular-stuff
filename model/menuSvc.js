app.service('menuSvc', ['$http', '$q', function($http, $q){
  var self = this;  
  //private variables
  var baseUrl = 'api/menu';
  //public functions
  self.getMenu = function() {
    //return $http.get(baseUrl + '/all');
    //totally real rest api call
    var defer = $q.defer();
    setTimeout(function() {
      apiData = apiData.sort(function(objA, objB){
        return objA.defaultSort - objB.defaultSort;  
      });
      defer.resolve(apiData);
    }, TIMEOUT_CONST);
    return defer.promise;
  }
  //retrieves top items of itemCnt
  self.getPopularItems = function(itemCnt) {
    var defer = $q.defer();
    setTimeout(function() {
      //get the top itemCnt popular items
      var popularItemLst = [];      
      apiData.forEach(function(category){
        //each category
        category.item_groups.forEach(function(itemGrp){
          //each item group
          itemGrp.items.forEach(function(item){
            //each item
            //insert item into pop item
            popularItemLst.push(item);
          });
        });
      });
      //sort popular item list
      popularItemLst.sort(function(itemA, itemB){
        return -1 * (itemA.popular_count - itemB.popular_count);
      });
      //slice the desired items
      var topItemLst = popularItemLst.slice(0, itemCnt);
      defer.resolve(topItemLst);
    }, TIMEOUT_CONST);
    return defer.promise;
  }
  //totally real rest api data
  var apiData = [
  {
    "name": "appetizers",
    "description": null,
    "defaultSort": 0,
    "item_groups": [
      {
        "name": null,
        "description": null,
        "items": [
          {
            "name": "Basil Roll(2)",
            "description": "Shrimp, lettuce, beansprout, basil, rice noodle wrapped in rice paper. Served w. plum sauce, crushed peanut",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 5.5,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Chicken Lettuce Wrap",
            "description": "Ground chicken, celery, carrot, basil stir fried in chef’s soy sauce over crispy rice noodles. Served w. side of lettuce",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 7.5,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Crab Rangoon",
            "description": "Crab meat, cream cheese hand wrapped in wonton skin",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 5.5,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Ebi Shuimai (6)",
            "description": "Pan fried or steamed shrimp dumpling ",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 5.5,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Edamame",
            "description": "Steamed soy pod w. salt",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 4,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Kimchi Chicken",
            "description": "Fried chicken breast seasoned in lightly spiced kimchi base",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 5.5,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Pork Gyoza (6)",
            "description": "Pan fried or deep fried pork dumpling",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 5.5,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Skewers (chicken or beef) (3)",
            "description": "Shrimp, lettuce, beansprout, basil, rice noodle wrapped in rice paper. Served w. plum sauce, crushed peanut",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 4.5,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Spring roll (3)",
            "description": "Shrimp, lettuce, beansprout, basil, rice noodle wrapped in rice paper. Served w. plum sauce, crushed peanut",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 5.5,
                "image_url": "/images/logo.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "entrée",
    "description": "all entrées served w. choice of soup",
    "defaultSort": 1,
    "item_groups": [
      {
        "name": null,
        "description": null,
        "items": [
          {
            "name": "Habachi Chicken",
            "description": null,
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 9.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Habachi Shrimp",
            "description": null,
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 11.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Habachi Steak",
            "description": null,
            "popular_count": 1,
            "variations": [
              {
                "variation": null,
                "price": 10.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Habachi Tofu",
            "description": null,
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 9.95,
                "image_url": "/images/logo.png"
              }
            ]
          }
        ]
      },
      {
        "name": null,
        "description": "Beef $8.95 | Chicken $7.95 | Shrimp $9.95 | Tofu $7.95",
        "items": [
          {
            "name": "Black Pepper",
            "description": "Sweet black pepper sauce w. bell pepper, onion, mushroom. Choice of rice",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Broccoli",
            "description": "Savory soy sauce w. broccoli, carrot. Choice of rice",
            "popular_count": 1,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Kung Pao",
            "description": "Bell pepper, scallion, dried chili, peanut. Choice of rice",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Mongolian",
            "description": "Sweet soy sauce, onion, scallion over crispy noodle. Choice of rice",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Thai basil",
            "description": "Spicy basil sauce w. basil, string beans, bell pepper, onion. Choice of rice",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Orange chicken",
            "description": "Fried chicken in sweet, spicy orange sauce. Choice of rice. (available in chicken only)",
            "popular_count": 1,
            "variations": [
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Sesame chicken",
            "description": "Fried chicken in sweet sesame sauce, sesame seeds. Choice of rice. (available in chicken only)",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Sweet & sour chicken",
            "description": "Fried chicken w. onion, bell pepper, pineapple in sweet & sour sauce. Choice of rice. (available in chicken only)",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Fried rice",
            "description": "Stir fried rice w. egg, corn, pea, carrot, onion",
            "popular_count": 2,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Lo mein",
            "description": "Stir fried egg noodle w. onion, scallion, carrot, bean sprout",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Pad thai",
            "description": "Stir fried flat rice noodle w. egg, scallion, onion, carrot, bean sprout, crushed peanuts",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Singapore curry noodle",
            "description": "Stir fried thin rice noodle, curry w. egg, scallion, onion, bell pepper, bean sprout",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Yaki udon",
            "description": "Stir fried thick wheat noodle w. bean sprout, onion, scallion, carrot",
            "popular_count": 0,
            "variations": [
              {
                "variation": "Beef",
                "price": 8.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Chicken",
                "price": 7.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Shrimp",
                "price": 9.95,
                "image_url": "/images/logo.png"
              },
              {
                "variation": "Tofu",
                "price": 7.95,
                "image_url": "/images/logo.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "soup",
    "description": null,
    "defaultSort": 2,
    "item_groups": [
      {
        "name": null,
        "description": null,
        "items": [
          {
            "name": "Hot & Sour Soup",
            "description": "Tofu, mushrooms, egg, bamboo shoot",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 2,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Miso Soup",
            "description": "Tofu, scallion, seaweed in soybean broth",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 2,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Mushroom Soup",
            "description": "Mushroom, scallion in onion broth",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 2,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Wonton Soup",
            "description": "Chicken wonton in onion broth",
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 2,
                "image_url": "/images/logo.png"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "salad",
    "description": null,
    "defaultSort": 3,
    "item_groups": [
      {
        "name": null,
        "description": null,
        "items": [
          {
            "name": "Garden Salad",
            "description": null,
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 2,
                "image_url": "/images/logo.png"
              }
            ]
          },
          {
            "name": "Seaweed Salad",
            "description": null,
            "popular_count": 0,
            "variations": [
              {
                "variation": null,
                "price": 4,
                "image_url": "/images/logo.png"
              }
            ]
          }
        ]
      }
    ]
  }
];
  
}]);