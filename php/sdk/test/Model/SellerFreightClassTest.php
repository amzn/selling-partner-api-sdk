<?php
/**
 * SellerFreightClassTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\SellerFreightClass;

/**
 * SellerFreightClassTest Class Doc Comment
 *
 * @category    Class
 * @description The freight class of the shipment. For information about determining the freight class, contact the carrier.
 * @package     OpenAPI\Client
 */
class SellerFreightClassTest extends TestCase
{

    private SellerFreightClass $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SellerFreightClass();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SellerFreightClass"
     */
    public function testSellerFreightClass()
    {
        $this->assertInstanceOf(SellerFreightClass::class, $this->model);
    }
}
