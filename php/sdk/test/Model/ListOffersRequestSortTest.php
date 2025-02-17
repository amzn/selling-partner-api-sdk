<?php
/**
 * ListOffersRequestSortTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\replenishment\v2022_11_07\ListOffersRequestSort;

/**
 * ListOffersRequestSortTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to sort the response.
 * @package     SpApi
 */
class ListOffersRequestSortTest extends TestCase
{

    private ListOffersRequestSort $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOffersRequestSort();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOffersRequestSort"
     */
    public function testListOffersRequestSort()
    {
        $this->assertInstanceOf(ListOffersRequestSort::class, $this->model);
    }

    /**
     * Test attribute "order"
     */
    public function testPropertyOrder()
    {
        $enumInstance = new \SpApi\Model\replenishment\v2022_11_07\SortOrder();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setOrder($testValue);
        $this->assertEquals($testValue, $this->model->getOrder());
    }

    /**
     * Test attribute "key"
     */
    public function testPropertyKey()
    {
        $enumInstance = new \SpApi\Model\replenishment\v2022_11_07\ListOffersSortKey();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setKey($testValue);
        $this->assertEquals($testValue, $this->model->getKey());
    }
}
