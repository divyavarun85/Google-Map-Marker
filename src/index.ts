import { User } from "./User";
import { Company } from "./company";
import { customMap } from "./customMp";

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const CustomMap = new customMap("map");

/*CustomMap.adderusermap(user);
CustomMap.addCompanyMap(company);
*/
CustomMap.addMarker(user);
CustomMap.addMarker(company);
