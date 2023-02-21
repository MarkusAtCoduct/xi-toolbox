import { GetContent } from "../../services/Api"
import { useAtom } from "jotai"
import { queryAtom } from "../../atoms/queryAtom"



export const fetchData = ({ pageParam = 0 }) => {
    return GetContent(
        `/api/method/search?label=&pageIndex=${pageParam}
            &pageSize=4&sortBy=${query.sortBy}
            &sortDirection=${query.sortDirection}
            &includeMethods=${query.includeMethods}
            &includeMethodSets=${query.includeMethodSets}`,
    )
}