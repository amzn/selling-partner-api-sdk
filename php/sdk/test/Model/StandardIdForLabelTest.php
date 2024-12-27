<?php
/**
 * StandardIdForLabelTest
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
use OpenAPI\Client\Model\merchantfulfillment\StandardIdForLabel;

/**
 * StandardIdForLabelTest Class Doc Comment
 *
 * @category    Class
 * @description The type of standard identifier to print on the label.
 * @package     OpenAPI\Client
 */
class StandardIdForLabelTest extends TestCase
{

    private StandardIdForLabel $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardIdForLabel();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardIdForLabel"
     */
    public function testStandardIdForLabel()
    {
        $this->assertInstanceOf(StandardIdForLabel::class, $this->model);
    }
}
