<?php
/**
 * AssociationTypeTest
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
use OpenAPI\Client\Model\orders\v0\AssociationType;

/**
 * AssociationTypeTest Class Doc Comment
 *
 * @category    Class
 * @description The type of association an item has with an order item.
 * @package     OpenAPI\Client
 */
class AssociationTypeTest extends TestCase
{

    private AssociationType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AssociationType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AssociationType"
     */
    public function testAssociationType()
    {
        $this->assertInstanceOf(AssociationType::class, $this->model);
    }
}
