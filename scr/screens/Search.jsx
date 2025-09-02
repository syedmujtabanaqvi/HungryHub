import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native'
import React, { useState } from 'react'

const Search = () => {
    const [selected, setSelected] = useState(null);

    const categories = [
        { id: "1", name: "All" },
        { id: "2", name: "Burgers" },
        { id: "3", name: "Pizza" },
        { id: "4", name: "Sandwich" },
        { id: "5", name: "Shawarma" },
        { id: "6", name: "Fries" },
        { id: "7", name: "Hot Dog" },
        { id: "8", name: "Tacos" },
        { id: "9", name: "Nuggets" },
        { id: "10", name: "Fried Chicken" },
    ];

    const fastFoods = [
        {
            id: "1",
            name: "Cheese Burger",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVGqvCJjEfB5pVOyXsIPWmUMrVqlVg-m9DY-vNoooAmkI1ByZpuB05U539gkUS9CNzhA&usqp=CAU",
            price: 250,
            itemNumber: "F001",
        },
        {
            id: "2",
            name: "Pepperoni Pizza",
            image: "https://media.istockphoto.com/id/1042948900/photo/pizza-pepperoni-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=2WZk35fHKdCCh1FU-fOX6hrixIWB3IlMl0FspKaOraA=",
            price: 1200,
            itemNumber: "F002",
        },
        {
            id: "3",
            name: "Chicken Shawarma",
            image: "https://media.istockphoto.com/id/1221237754/photo/two-halves-of-club-sandwich-on-white.jpg?s=612x612&w=0&k=20&c=jTThChWPJoFPxOdW1F4I-UzDqzS97iIgTm4-JJe-gOQ=",
            price: 300,
            itemNumber: "F003",
        },
        {
            id: "4",
            name: "French Fries",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0zxIvmbhNjWTWDNTFDrWfaYmyFXS-VVcpQ&s",
            price: 180,
            itemNumber: "F004",
        },
        {
            id: "5",
            name: "Fried Chicken",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRITlyyzM6UJ4OvT_8p7Ho9fiIJi8wuzVm4TQmkbaQbAkn4OXXfmgVxyvmDd7FwG0ZS8s&usqp=CAU",
            price: 500,
            itemNumber: "F005",
        },
        {
            id: "6",
            name: "Mega crunch",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTq44hpK2xrNXiYJsORfatYHQTf--bBQTrng&s",
            price: 220,
            itemNumber: "F006",
        },
        {
            id: "7",
            name: "Veg Sandwich",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7sUDjf-OqLgDLIYS16C9kxEY_XTkkwKNjdQ&s",
            price: 200,
            itemNumber: "F007",
        },
        {
            id: "8",
            name: "Chicken Nuggets",
            image: "https://static.vecteezy.com/system/resources/thumbnails/050/176/188/small_2x/chicken-nuggets-on-a-plate-isolated-on-transparent-background-png.png",
            price: 350,
            itemNumber: "F008",
        }
    ];


    return (
        <View>
            <Text style={{ color: '#ffc400ff', marginTop: 47, marginLeft: 20 }}>Search</Text>
            <Text style={{ color: '#000000ff', marginTop: 3, marginLeft: 20 }}>Find your favourite Food</Text>

            <TextInput
                placeholder="Search..."
                style={styles.searchBar}
            />

            <FlatList
                horizontal
                data={categories}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.chip, selected === item.name && styles.activeChip]}
                        onPress={() => setSelected(item.name)}
                    >
                        <Text style={[styles.chipText, selected === item.name && styles.activeChipText]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <FlatList
                data={fastFoods}

                keyExtractor={(item) => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ marginTop: 8, marginLeft: 20, margin: 10, padding: 10, height: 180, width: 150, backgroundColor: '#fff', borderRadius: 30, elevation: 2 }}
                        onPress={() => Alert.alert(item.name)}
                    >
                        <Image style={{ marginLeft: 8, marginTop: 5, height: 90, width: 100 }} source={{ uri: item.image }}
                        />
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.name}</Text>
                        <Text>Rs {item.price}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    searchBar: {
        backgroundColor: "#fff",
        borderRadius: 25,
        paddingHorizontal: 15,
        height: 45,
        margin: 16,
        elevation: 2,
        borderWidth: 1,
    },
    chip: {
        backgroundColor: "#fff",
        paddingVertical: 9,
        paddingHorizontal: 19,
        borderRadius: 20,
        elevation: 2,
        marginLeft: 10

    },
    chipText: {
        color: "#000",
        fontSize: 14,
    },
    activeChip: {
        backgroundColor: "#ff8500",
    },
    activeChipText: {
        color: "#fff",
    }
})
