<?php
/**
 * PackingOptionSummaryTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentinbound\PackingOptionSummary;

/**
 * PackingOptionSummaryTest Class Doc Comment
 *
 * @category    Class
 * @description Summary information about a packing option.
 * @package     OpenAPI\Client
 */
class PackingOptionSummaryTest extends TestCase
{

    private PackingOptionSummary $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackingOptionSummary();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackingOptionSummary"
     */
    public function testPackingOptionSummary()
    {
        $this->assertInstanceOf(PackingOptionSummary::class, $this->model);
    }

    /**
     * Test attribute "packing_option_id"
     */
    public function testPropertyPackingOptionId()
    {
        $testValue = 'test';
        
        $this->model->setPackingOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getPackingOptionId());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }
}
