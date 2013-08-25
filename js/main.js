'use strict';


$(document).ready(function() {

  var predefined_data =
  [
    [
      {"id": 1, "player": "Jurong", "wastetotal": "475918", "average_per_house": "0.5592", "recycle_percentage": "5.48", "paper": "330887", "can": "9137", "glass": "16653", "plastic": "49460", "cloth": "30347", "misc": "39434", "garden": "102680", "month": "1\/1\/2013", "inc": "0", "dec": "1", "difference": "21", "badge1": "0", "badge2": "1", "badge3": "0"},
      {"id": 2, "player": "Bedok", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 3, "player": "City", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 4, "player": "Clementi", "wastetotal": "166035", "average_per_house": "", "recycle_percentage": "", "paper": "94181", "can": "9140", "glass": "19911", "plastic": "29991", "cloth": "8922", "misc": "3890", "garden": "0", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "1", "badge2": "0", "badge3": "1"},
      {"id": 5, "player": "HG-PG", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 6, "player": "PRT", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 7, "player": "AMK", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 8, "player": "TBM", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 9, "player": "WL-Y", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"}
    ],
    [
      {"id": 1, "player": "AMK", "wastetotal": "12", "average_per_house": "", "recycle_percentage": "", "paper": "41421", "can": "11", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "0", "badge2": "1", "badge3": "0"},
      {"id": 2, "player": "Bedok", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 3, "player": "City", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 4, "player": "Clementi", "wastetotal": "166035", "average_per_house": "", "recycle_percentage": "", "paper": "94181", "can": "9140", "glass": "19911", "plastic": "29991", "cloth": "8922", "misc": "3890", "garden": "0", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "1", "badge2": "0", "badge3": "1"},
      {"id": 5, "player": "HG-PG", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 6, "player": "PRT", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 7, "player": "Jurong", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 8, "player": "TBM", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 9, "player": "WL-Y", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"}
    ],
    [
      {"id": 1, "player": "AMK", "wastetotal": "12", "average_per_house": "", "recycle_percentage": "", "paper": "41421", "can": "11", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "0", "badge2": "1", "badge3": "0"},
      {"id": 2, "player": "Bedok", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 3, "player": "City", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 4, "player": "Clementi", "wastetotal": "166035", "average_per_house": "", "recycle_percentage": "", "paper": "94181", "can": "9140", "glass": "19911", "plastic": "29991", "cloth": "8922", "misc": "3890", "garden": "0", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "1", "badge2": "0", "badge3": "1"},
      {"id": 5, "player": "HG-PG", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 6, "player": "PRT", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 7, "player": "Jurong", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 8, "player": "TBM", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 9, "player": "WL-Y", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"}
    ],
    [
      {"id": 1, "player": "AMK", "wastetotal": "12", "average_per_house": "", "recycle_percentage": "", "paper": "41421", "can": "11", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "0", "badge2": "1", "badge3": "0"},
      {"id": 2, "player": "Bedok", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 3, "player": "City", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 4, "player": "Clementi", "wastetotal": "166035", "average_per_house": "", "recycle_percentage": "", "paper": "94181", "can": "9140", "glass": "19911", "plastic": "29991", "cloth": "8922", "misc": "3890", "garden": "0", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "1", "badge2": "0", "badge3": "1"},
      {"id": 5, "player": "HG-PG", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 6, "player": "PRT", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 7, "player": "Jurong", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 8, "player": "TBM", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 9, "player": "WL-Y", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"}
    ],
    [
      {"id": 1, "player": "AMK", "wastetotal": "12", "average_per_house": "", "recycle_percentage": "", "paper": "41421", "can": "11", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "0", "badge2": "1", "badge3": "0"},
      {"id": 2, "player": "Bedok", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 3, "player": "City", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 4, "player": "Clementi", "wastetotal": "166035", "average_per_house": "", "recycle_percentage": "", "paper": "94181", "can": "9140", "glass": "19911", "plastic": "29991", "cloth": "8922", "misc": "3890", "garden": "0", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "1", "badge2": "0", "badge3": "1"},
      {"id": 5, "player": "HG-PG", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 6, "player": "PRT", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 7, "player": "Jurong", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 8, "player": "TBM", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 9, "player": "WL-Y", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"}
    ],
    [
      {"id": 1, "player": "AMK", "wastetotal": "12", "average_per_house": "", "recycle_percentage": "", "paper": "41421", "can": "11", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "0", "badge2": "1", "badge3": "0"},
      {"id": 2, "player": "Bedok", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 3, "player": "City", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 4, "player": "Clementi", "wastetotal": "166035", "average_per_house": "", "recycle_percentage": "", "paper": "94181", "can": "9140", "glass": "19911", "plastic": "29991", "cloth": "8922", "misc": "3890", "garden": "0", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "1", "badge2": "0", "badge3": "1"},
      {"id": 5, "player": "HG-PG", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 6, "player": "PRT", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 7, "player": "Jurong", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 8, "player": "TBM", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 9, "player": "WL-Y", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"}
    ],
    [
      {"id": 1, "player": "AMK", "wastetotal": "12", "average_per_house": "", "recycle_percentage": "", "paper": "41421", "can": "11", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "0", "badge2": "1", "badge3": "0"},
      {"id": 2, "player": "Bedok", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 3, "player": "City", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 4, "player": "Clementi", "wastetotal": "166035", "average_per_house": "", "recycle_percentage": "", "paper": "94181", "can": "9140", "glass": "19911", "plastic": "29991", "cloth": "8922", "misc": "3890", "garden": "0", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "1", "badge2": "0", "badge3": "1"},
      {"id": 5, "player": "HG-PG", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 6, "player": "PRT", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 7, "player": "Jurong", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 8, "player": "TBM", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 9, "player": "WL-Y", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"}
    ],
    [
      {"id": 1, "player": "AMK", "wastetotal": "12", "average_per_house": "", "recycle_percentage": "", "paper": "41421", "can": "11", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "0", "badge2": "1", "badge3": "0"},
      {"id": 2, "player": "Bedok", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 3, "player": "City", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 4, "player": "Clementi", "wastetotal": "166035", "average_per_house": "", "recycle_percentage": "", "paper": "94181", "can": "9140", "glass": "19911", "plastic": "29991", "cloth": "8922", "misc": "3890", "garden": "0", "month": "1\/1\/2011", "inc": "0", "dec": "1", "difference": "21", "badge1": "1", "badge2": "0", "badge3": "1"},
      {"id": 5, "player": "HG-PG", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 6, "player": "PRT", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 7, "player": "Jurong", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 8, "player": "TBM", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"},
      {"id": 9, "player": "WL-Y", "wastetotal": "10", "average_per_house": "91", "recycle_percentage": "12", "paper": "9876", "can": "0", "glass": "12421", "plastic": "124", "cloth": "124", "misc": "123", "garden": "102680", "month": "1\/1\/2011", "inc": "TRUE", "dec": "FALSE", "difference": "20", "badge1": "0", "badge2": "0", "badge3": "1"}
    ]
  ];

  var types_of_recycyables = ['all', 'paper', 'can', 'glass', 'plastic', 'cloth', 'garden', 'misc'];

  for (var i = 0; i < types_of_recycyables.length; i++) {
    var type = types_of_recycyables[i];
    var _data = predefined_data[i];
    var content = {
      data: _data
    };
    $('#leaderboard_' + type).html(ich.leaderboard(content));
  }

});