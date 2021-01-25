import * as UE from 'ue'

declare module "ue" {
    interface Object {
        CreateDefaultSubobjectGeneric<T extends UE.Object>(SubobjectFName: string, ReturnType: UE.Class) : T
    }
}

UE.Object.prototype.CreateDefaultSubobjectGeneric = function CreateDefaultSubobjectGeneric<T extends UE.Object>(SubobjectFName: string, ReturnType: UE.Class) : T {
    return this.CreateDefaultSubobject(SubobjectFName, ReturnType, ReturnType, /*bIsRequired =*/ true, /*bIsAbstract =*/ false, /*bTransient =*/ false) as T;
}
