<?php
/**
 * TaxTypeTest
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
use OpenAPI\Client\Model\shipping\TaxType;

/**
 * TaxTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the type of tax.
 * @package     OpenAPI\Client
 */
class TaxTypeTest extends TestCase
{

    private TaxType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TaxType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TaxType"
     */
    public function testTaxType()
    {
        $this->assertInstanceOf(TaxType::class, $this->model);
    }
}
