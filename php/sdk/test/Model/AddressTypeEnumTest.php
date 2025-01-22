<?php
/**
 * AddressTypeEnumTest
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
use OpenAPI\Client\Model\invoicing\AddressTypeEnum;

/**
 * AddressTypeEnumTest Class Doc Comment
 *
 * @category    Class
 * @description The shipping address type.
 * @package     OpenAPI\Client
 */
class AddressTypeEnumTest extends TestCase
{

    private AddressTypeEnum $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AddressTypeEnum();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AddressTypeEnum"
     */
    public function testAddressTypeEnum()
    {
        $this->assertInstanceOf(AddressTypeEnum::class, $this->model);
    }
}
