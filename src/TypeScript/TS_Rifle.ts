import TS_BaseGun from './TS_BaseGun'
import * as UE from 'ue'

class TS_Rifle extends TS_BaseGun {
    Constructor() {
        this.MaxBulletDistance = 5000;
        this.Damage = 2;
        this.FireRate = 0.1;

        this.GunMesh = this.CreateDefaultSubobjectGeneric<UE.StaticMeshComponent>("GunMesh", UE.StaticMeshComponent.StaticClass());
        this.GunMesh.StaticMesh = UE.StaticMesh.Load("/Game/BlockBreaker/Meshes/SM_Rifle");
        this.RootComponent = this.GunMesh;
    }
}

export default TS_Rifle;
