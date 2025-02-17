<?php
/**
 * ListOfferMetricsRequestSortTest
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
use SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsRequestSort;

/**
 * ListOfferMetricsRequestSortTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to sort the response.
 * @package     SpApi
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
        $enumInstance = new \SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsSortKey();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setKey($testValue);
        $this->assertEquals($testValue, $this->model->getKey());
    }
}
