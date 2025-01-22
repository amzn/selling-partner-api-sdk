<?php
/**
 * ListOfferMetricsRequestSortTest
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
use OpenAPI\Client\Model\replenishment\ListOfferMetricsRequestSort;

/**
 * ListOfferMetricsRequestSortTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to sort the response.
 * @package     OpenAPI\Client
 */
class ListOfferMetricsRequestSortTest extends TestCase
{

    private ListOfferMetricsRequestSort $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOfferMetricsRequestSort();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOfferMetricsRequestSort"
     */
    public function testListOfferMetricsRequestSort()
    {
        $this->assertInstanceOf(ListOfferMetricsRequestSort::class, $this->model);
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
        $enumInstance = new \OpenAPI\Client\Model\replenishment\ListOfferMetricsSortKey();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setKey($testValue);
        $this->assertEquals($testValue, $this->model->getKey());
    }
}
