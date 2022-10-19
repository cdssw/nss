import { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function useScrollMove({path, dom}) {
    const history = useHistory();
    const [pos, setPos] = useState(() => localStorage.getItem(`pos`));
    const match = useRouteMatch(path);

    const savePos = useCallback(() => {
        const position = dom ? dom.scrollTop : window.scrollY;
        setPos(position);
        return localStorage.setItem(`pos`, position);
    }, [dom]);

    const removePos = useCallback(() => {
        setPos(0);
        localStorage.removeItem(`pos`);
    }, []);

    useEffect(() => {
        return history.listen((location) => {
            if(location.pathname !== path && location.pathname !== "/login") {
                savePos();
            }
        });
    }, [history, savePos, match, path]);

    return { pos, removePos };
}