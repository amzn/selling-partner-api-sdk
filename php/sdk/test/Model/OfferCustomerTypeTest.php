<?php
/**
 * OfferCustomerTypeTest
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
use OpenAPI\Client\Model\pricing\v0\OfferCustomerType;

/**
 * OfferCustomerTypeTest Class Doc Comment
 *
 * @category    Class
 * @description OfferCustomerType
 * @package     OpenAPI\Client
 */
class OfferCustomerTypeTest extends TestCase
{

    private OfferCustomerType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferCustomerType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferCustomerType"
     */
    public function testOfferCustomerType()
    {
        $this->assertInstanceOf(OfferCustomerType::class, $this->model);
    }
}
