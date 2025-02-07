<?php
/**
 * PackingSlipListTest
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
use OpenAPI\Client\Model\vendor\df\shipping\v2021_12_28\PackingSlipList;

/**
 * PackingSlipListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of packing slips.
 * @package     OpenAPI\Client
 */
class PackingSlipListTest extends TestCase
{

    private PackingSlipList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackingSlipList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackingSlipList"
     */
    public function testPackingSlipList()
    {
        $this->assertInstanceOf(PackingSlipList::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\shipping\v2021_12_28\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "packing_slips"
     */
    public function testPropertyPackingSlips()
    {
        $testValue = [];
        
        $this->model->setPackingSlips($testValue);
        $this->assertEquals($testValue, $this->model->getPackingSlips());
    }
}
