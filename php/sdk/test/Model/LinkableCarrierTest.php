<?php
/**
 * LinkableCarrierTest
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
use OpenAPI\Client\Model\shipping\v2\LinkableCarrier;

/**
 * LinkableCarrierTest Class Doc Comment
 *
 * @category    Class
 * @description Info About Linkable Carrier
 * @package     OpenAPI\Client
 */
class LinkableCarrierTest extends TestCase
{

    private LinkableCarrier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LinkableCarrier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LinkableCarrier"
     */
    public function testLinkableCarrier()
    {
        $this->assertInstanceOf(LinkableCarrier::class, $this->model);
    }

    /**
     * Test attribute "carrier_id"
     */
    public function testPropertyCarrierId()
    {
        $testValue = 'test';
        
        $this->model->setCarrierId($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierId());
    }

    /**
     * Test attribute "linkable_account_types"
     */
    public function testPropertyLinkableAccountTypes()
    {
        $testValue = [];
        
        $this->model->setLinkableAccountTypes($testValue);
        $this->assertEquals($testValue, $this->model->getLinkableAccountTypes());
    }
}
