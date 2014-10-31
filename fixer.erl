% copy paste then unindent blocks from http://eslint.org/docs/rules/
% copy paste unindented into erlang string

B2E = fun(BT) -> sc:explode("\n\n",BT) end.

B2X = fun(BE) -> [ sc:explode(" - ", BI) || BI <- BE ] end.

B2J = fun(BX) -> K = [ BI || [BI,_] <- BX ], {_,L} = sc:extrema([length(Ki)||Ki<-K]), [ io:format("    \"~." ++ integer_to_list(L + 1) ++ "s : 0,~n", [Ki ++ "\""]) || Ki <- K ] end.

BFix = fun(T) -> B2J(B2X(B2E(T))) end.