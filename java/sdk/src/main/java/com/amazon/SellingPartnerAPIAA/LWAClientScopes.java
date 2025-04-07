package com.amazon.SellingPartnerAPIAA;

import com.google.gson.annotations.JsonAdapter;
import java.util.Set;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
@JsonAdapter(LWAClientScopesSerializerDeserializer.class)
public class LWAClientScopes {

    private final Set<String> scopes;

    protected void addScope(String scope) {
        scopes.add(scope);
    }

    protected boolean isEmpty() {
        return scopes.isEmpty();
    }
}
