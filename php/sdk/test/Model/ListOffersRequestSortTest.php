<?php
/**
 * ListOffersRequestSortTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\replenishment\ListOffersRequestSort;

/**
 * ListOffersRequestSortTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to sort the response.
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\replenishment\SortOrder();
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
        $enumInstance = new \OpenAPI\Client\Model\replenishment\ListOffersSortKey();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setKey($testValue);
        $this->assertEquals($testValue, $this->model->getKey());
    }
}
