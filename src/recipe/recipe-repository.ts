import {Injectable} from "@angular/core";
import {NativeStorage} from '@ionic-native/native-storage';
import {Recipe} from "./recipe";


@Injectable()
export class ReciptesRepository {
    private nativeStorage;

    constructor(nativeStorage: NativeStorage) {
        this.nativeStorage = nativeStorage;
    }

    persist(recipe: Recipe, index: number) {
        this.nativeStorage.getItem('recipes')
            .then(
                reciptes => {
                        if (index != undefined) {
                            reciptes[index] = recipe;
                        } else {
                            reciptes.push(recipe);
                        }

                        this.save(reciptes);
                },
                error => {
                   this.save([]);
                }
            );

    }

    private save(reciptes: Array<Recipe>){

        this.nativeStorage.setItem('recipes', reciptes)
            .then(
                () => console.log('Stored reciptes!'),
                error => console.error('Error storing item', error)
            );
    }

    getReciptes(): Promise<any> {
        return this.nativeStorage.getItem('recipes');
    }
}