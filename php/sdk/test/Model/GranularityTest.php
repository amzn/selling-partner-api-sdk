<?php
/**
 * GranularityTest
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
use OpenAPI\Client\Model\fbaInventory\Granularity;

/**
 * GranularityTest Class Doc Comment
 *
 * @category    Class
 * @description Describes a granularity at which inventory data can be aggregated. For example, if you use Marketplace granularity, the fulfillable quantity will reflect inventory that could be fulfilled in the given marketplace.
 * @package     OpenAPI\Client
 */
class GranularityTest extends TestCase
{

    private Granularity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Granularity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Granularity"
     */
    public function testGranularity()
    {
        $this->assertInstanceOf(Granularity::class, $this->model);
    }

    /**
     * Test attribute "granularity_type"
     */
    public function testPropertyGranularityType()
    {
        $testValue = 'test';
        
        $this->model->setGranularityType($testValue);
        $this->assertEquals($testValue, $this->model->getGranularityType());
    }

    /**
     * Test attribute "granularity_id"
     */
    public function testPropertyGranularityId()
    {
        $testValue = 'test';
        
        $this->model->setGranularityId($testValue);
        $this->assertEquals($testValue, $this->model->getGranularityId());
    }
}
